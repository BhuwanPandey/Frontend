import React,{useState} from 'react';
import Btn from './button';

const App=()=>{
  const [value,setValue]=useState('0');
  const firstV=['Clear','Backspace','%','/']
  const secondV=['7','8','9','*']
  const thirdV=['4','5','6','-']
  const fourV=['1','2','3','+']
  const fiveV=['0','.','=']

const cal=(event)=>{
  let op=event.target.innerText;
  
  setValue((preVal)=>{

    if(op==='Clear'){
        return('0');
    }
    else if(preVal==='0'){
        if(op==='Backspace'){
            return('0');
        }
        return(op);

    }else if(op==='Backspace'){
        if(preVal.slice(0,-1)==='' || preVal==='Error'){
            return('0')
        }
        return(preVal.slice(0,-1))
    }
    else if(op==='='){
        try{
            return(`${eval(preVal)}`)
        }catch(err){
            return('Error');
        }
    }
    else{
        if(preVal==='Error'){
            return(op);
        }
        return(preVal+op);
    }
})
  
}

  return(
    <div className='parentDiv'>
      <div className='childDiv'>
        <h1>Calculator using Reactjs</h1>
        <div className='innerChild'>
          <div className="screen">
            <span>{value}</span>
          </div>
          <div className='first'>

          {firstV.map((val,index)=>{
                
                return(
                    <Btn name={val} action={cal} key={index} />
                );
            })}

          </div>
          <div className='second'>
          {secondV.map((val,index)=>{
                
                return(
                    <Btn name={val} action={cal} key={index} />
                );
            })}
          </div>
          <div className='third'>
          {thirdV.map((val,index)=>{
                
                return(
                    <Btn name={val} action={cal} key={index} />
                );
            })}
          </div>
          <div className='fourth'>
          {fourV.map((val,index)=>{
                
                return(
                    <Btn name={val} action={cal} key={index} />
                );
            })}
          </div>
          <div className='fifth'>
          {fiveV.map((val,index)=>{
                
                return(
                    <Btn name={val} action={cal} key={index} />
                );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;