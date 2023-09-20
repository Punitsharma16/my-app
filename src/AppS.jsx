
import { NameError } from "./Forms/NameErr"
import { ShowError } from "./Forms/ShowError"
import { CheckBox } from "./Forms/checkBox"
import { Form } from "./Forms/controlForm"
import { DataOnUI } from "./Forms/fromDataOnUI"
import { Info } from "./Forms/info"
import { User } from "./Forms/multipleInputBox"
import { Err } from "./Forms/onblur"
import { Email, Name } from "./States/Login"
import { UserInfo } from "./States/stateOnObj"
import { Array } from "./States/statesOnArrays"
import { Counter2 } from "./countersInState/AsyncState"
import { Counter, Counter1 } from "./countersInState/counter"
import { FetchData } from "./useEffect/AsyncAwait"
import { TryLoader } from "./useEffect/loader/Loader"
import { CommentsWithLoader } from "./useEffect/commentsWithLoader"
import { NewLoader } from "./useEffect/loader/loaderdesign"
import { SideEffectExOne } from "./useEffect/useEffect"
// import InfiniteScroll from "./useEffect/loader/Scroll"
import { Anything, Scroll } from "./useEffect/loader/Scroll"
import { ShoeTwo } from "./Props/ParentToChild/products"
import { ContextApi } from "./ContextApi/contextApi"
import { Parent } from "./Props/ChildToParent.jsx/parent"
import { Owner } from "./ContextApi/COntextAPi 2/owner"
import { Datafile } from "./ContextApi/passDynmicVal/datafile"
// import { HandleScroll } from "./useEffect/HandleScroll"

export const AppS = ()=>{
    
    return(
        <>
        {/* <Name/>
        <Email/>
        <UserInfo/>
        <Array/> */}
        {/* <Counter/>
        <Counter1/>
        <Counter2/> */}
        {/* <Info/> */}
        {/* <User/> */}
        {/* <Form/> */}
        {/* <DataOnUI/> */}
        {/* <CheckBox/> */}
        {/* <ShowError/> */}
        {/* <NameError/> */}
        {/* <Err/> */}
        {/* <SideEffectExOne/> */}
        {/* <FetchData/> */}
        {/* <TryLoader/> */}
        {/* <CommentsWithLoader/> */}
        {/* <NewLoader/> */}
        {/* <HandleScroll/> */}
        {/* <Anything/> */}
        {/* <InfiniteScroll/> */}
        {/* <ShoeTwo/> */}
        {/* <ContextApi/> */}
        {/* <Parent/> */}
        {/* <Owner/> */}
        <Datafile/>
        </>
    )
}