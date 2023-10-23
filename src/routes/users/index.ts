import { lazy } from 'react';

const UserList = lazy(() => import('../../pages/Users/List'));

const userRoutes = [
	{
		path: '/users',
		index: false,
		element: UserList
	}
];

export default userRoutes;
