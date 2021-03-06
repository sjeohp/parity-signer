// Copyright 2015-2019 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

'use strict';

import { NavigationActions, StackActions } from 'react-navigation';
import { NETWORK_LIST } from '../constants';

export const setPin = async navigation =>
	new Promise(resolve => {
		navigation.navigate('IdentityPin', { isNew: true, resolve });
	});

export const unlockSeedPhrase = async (navigation, identity) =>
	new Promise(resolve => {
		navigation.navigate('IdentityPin', { identity, isUnlock: true, resolve });
	});

export const unlockPin = async (navigation, identity) =>
	new Promise(resolve => {
		navigation.navigate('IdentityPin', {
			identity,
			isUnlock: true,
			resolve,
			resolvePin: true
		});
	});

export const navigateToPathsList = (navigation, networkKey) => {
	const resetAction = StackActions.reset({
		actions: [
			NavigationActions.navigate({
				isNew: false,
				routeName: 'AccountNetworkChooser'
			}),
			NavigationActions.navigate({
				params: { networkKey },
				routeName: 'PathsList'
			})
		],
		index: 1,
		key: undefined
	});
	navigation.dispatch(resetAction);
};

export const navigateToSubstrateRoot = (navigation, networkKey) => {
	const pathId = NETWORK_LIST[networkKey].pathId;
	const resetAction = StackActions.reset({
		actions: [
			NavigationActions.navigate({
				isNew: false,
				routeName: 'AccountNetworkChooser'
			}),
			NavigationActions.navigate({
				params: { networkKey },
				routeName: 'PathsList'
			}),
			NavigationActions.navigate({
				params: { path: `//${pathId}` },
				routeName: 'PathDetails'
			})
		],
		index: 2,
		key: undefined
	});
	navigation.dispatch(resetAction);
};

export const navigateToPathDetails = (navigation, networkKey, path) => {
	const resetAction = StackActions.reset({
		actions: [
			NavigationActions.navigate({
				isNew: false,
				routeName: 'AccountNetworkChooser'
			}),
			NavigationActions.navigate({
				params: { networkKey },
				routeName: 'PathsList'
			}),
			NavigationActions.navigate({
				params: { path },
				routeName: 'PathDetails'
			})
		],
		index: 2,
		key: undefined
	});
	navigation.dispatch(resetAction);
};

export const navigateToLandingPage = (navigation, isSwitchOpen) => {
	const resetAction = StackActions.reset({
		actions: [
			NavigationActions.navigate({
				params: { isSwitchOpen },
				routeName: 'AccountNetworkChooser'
			})
		],
		index: 0,
		key: undefined
	});
	navigation.dispatch(resetAction);
};

export const navigateToNewIdentityNetwork = navigation => {
	const resetAction = StackActions.reset({
		actions: [
			NavigationActions.navigate({
				params: { isNew: true },
				routeName: 'AccountNetworkChooser'
			})
		],
		index: 0,
		key: undefined
	});
	navigation.dispatch(resetAction);
};

export const navigateToSignedMessage = (navigation, isLegacy) => {
	const resetAction = StackActions.reset({
		actions: [
			NavigationActions.navigate({
				isNew: false,
				routeName: isLegacy ? 'LegacyAccountList' : 'AccountNetworkChooser'
			}),
			NavigationActions.navigate({
				params: { isNew: true },
				routeName: 'SignedMessage'
			})
		],
		index: 1,
		key: undefined
	});
	navigation.dispatch(resetAction);
};

export const navigateToSignedTx = (navigation, isLegacy) => {
	const resetAction = StackActions.reset({
		actions: [
			NavigationActions.navigate({
				isNew: false,
				routeName: isLegacy ? 'LegacyAccountList' : 'AccountNetworkChooser'
			}),
			NavigationActions.navigate({
				params: { isNew: true },
				routeName: 'SignedTx'
			})
		],
		index: 1,
		key: undefined
	});
	navigation.dispatch(resetAction);
};

export const resetNavigationTo = (navigation, screenName, params) => {
	const resetAction = StackActions.reset({
		actions: [NavigationActions.navigate({ params, routeName: screenName })],
		index: 0,
		key: undefined
	});
	navigation.dispatch(resetAction);
};

export const navigateToLegacyAccountList = navigation =>
	resetNavigationTo(navigation, 'LegacyAccountList');
