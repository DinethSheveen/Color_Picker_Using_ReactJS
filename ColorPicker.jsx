import React,{useState} from 'react'
import '../App.css';

const ColorPicker = () => {

  const [color,setColor] = useState("#FFFFFF");

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return (
    <div className='container'>
        <h2>Color Picker</h2>
        <div className='colorContainer' style={{backgroundColor : color}}>
            <p>Selected Color : {color} </p>
        </div>

        <label>Select Color : </label>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker