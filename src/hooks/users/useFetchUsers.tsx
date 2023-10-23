import { useEffect, useState } from 'react';
import api from '../../boot/api';
import User from '../../types/user';

async function useFetchUsers() {
	const [users, setUsers] = useState<User[]>([]);

	const res = await api.get('/users');
	setUsers(res.data.data);

	useEffect(() => {
		console.log('Example Fetching user list...', users);
	});
}

export default useFetchUsers;
