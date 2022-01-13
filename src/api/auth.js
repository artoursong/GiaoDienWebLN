import { khachAPI} from './index'

const authService = {
    login: (userData) => {
        return khachAPI.post('user/login', userData)
    }
}

export { authService}

