import axios from 'axios';
import usersConstant from '../constants/usersConstant';
import { Dispatch, SetStateAction } from 'react';

// class Users {
//    static getUserInfo<T>(id: string, method: Dispatch<SetStateAction<T>>) {
//       let url = `${usersConstant.USER_API}${JSON.parse(id)}`;
//       axios
//          .get(url)
//          .then((res) => method(res.data))
//          .catch((err) => {
//             throw Error(err.message);
//          });
//    }
// }

// export default Users;
