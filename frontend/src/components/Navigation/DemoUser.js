import {useDispatch} from 'react-redux'
import * as sessionActions from '../../store/session'

const DemoUser = () => {
    const dispatch = useDispatch()

    const handleClick = e => {
        e.preventDefault()

        const credential = 'demouser'
        const password = 'password'

        dispatch(sessionActions.login({credential,password}))
    }
    return (
        <button id='demo_button' onClick={handleClick} type="submit"
            style={{backgroundColor:'transparent', 
                    color:'white',
                    border:'1px solid white',
                    borderRadius:'8px',
                    fontWeight:'700',
                    fontSize: '14px'

        }}  
        >Demo User</button>
    )
}
export default DemoUser;