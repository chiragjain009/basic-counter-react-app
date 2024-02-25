import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import {ThirdComponent} from './FirstComponent';


export default function LearningComponent(){
    return(
        <>
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
        </>

    );
}