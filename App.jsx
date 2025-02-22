import React,{useState,useEffect} from 'react';
import './App.css'

function App() {
 
  const[values,setValues]=useState(()=>{
   const store =localStorage.getItem('values');
    return store ? JSON.parse(store) :[];
  });
 
 
  const[newtitle,setTitle]=useState('');
  const[newdescription,setDescription]=useState('');
  const handleAdd=()=>{
    
      let  newOne={
        title:newtitle,
        description:newdescription
      }
      let UpdatedOne=[...values];
      UpdatedOne.push(newOne)
      setValues(UpdatedOne);
      
  }

  const handleDelete=(indexNum)=>{
    let data=values.filter((values,index)=>index!==indexNum);
    setValues(data);
  }
   
  const handleSubmit=(e)=>{
    e.preventDefault();
    setValues('')
  }

  useEffect(()=>{
     localStorage.setItem("values",JSON.stringify(values))
  },[values])

  return (
    <div className="App">
        <h2>TODO APPLICATION</h2>
      <form className="main-cont" onSubmit={handleSubmit}>

        <div className="input-item">

          <div className="input-value">
            <label>title :</label>
            <input type='text'value={newtitle} 
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="What's u r todo?" />
          </div>

          <div className="input-value">
            <label>Description :</label>
            <input 
            type='text' value={newdescription}
            onChange={(e)=>setDescription(e.target.value)}
             placeholder="What's u r Description?" />
          </div>

          <div className="input-value">
           <button type='button' className='primary-btn' onClick={handleAdd}>Add</button>
          </div>

        </div>
        
     
     <div className='todo-list'>
        
          {
            values.map((val,index)=>{
              return (
                <div className='todo-list-item' key={index}>
                  <div className="btn-delete">
                     <h3 className='title'>{val.title}</h3> 
                     <p>{val.description}</p>
                     <div>
                      <button className='edit-btn'>Edit</button>
                      <button type='button'
                       className='btn-2'
                       onClick={()=>handleDelete(index)}
                       >Delete</button>
                     </div>
                     </div>
                </div>
              )
            })
          }
        </div>
      </form>
      </div>
   
  );
}

export default App;
