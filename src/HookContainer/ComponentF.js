import React,{ useContext} from 'react';
import { UserContext, ChannelContext, ObjectTestContext } from '../App';

function ComponentF() {
    
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    const ObjectTest = useContext(ObjectTestContext)

    return(
        <div>
            Component F { user } - { channel } - { ObjectTest } 
        </div>
    )
}

export default ComponentF;