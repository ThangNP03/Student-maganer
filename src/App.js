import React from 'react';
import Control from './Components/Control';
import ListStudent from './Components/ListStudent';
import Form from './Components/Form';
import { useState, useEffect } from 'react';

export default function App() {
  let arrStudent =[
    {studentId :"SV001", studentName:"Nguyễn phúc A", age : 20, sex : true, birthDate:"15/03/2003" , birthPlace: "Nghệ  AN" , adress : "Ba Đình "},
    {studentId :"SV002", studentName:"Nguyễn phúc Thắng", age : 20, sex : true, birthDate:"15/03/2003" , birthPlace: "Nghệ  AN" , adress : "Ba Đình "},
    {studentId :"SV003", studentName:"Nguyễn phúc Thắng", age : 20, sex : false, birthDate:"15/03/2003" , birthPlace: "Nghệ  AN" , adress : "Ba Đình "},
    {studentId :"SV004", studentName:"Nguyễn phúc Thắng", age : 20, sex : false, birthDate:"15/03/2003" , birthPlace: "Nghệ  AN" , adress : "Ba Đình "},
  ]
  
  const [students, setStudents]= useState(arrStudent);
  const [toogleForm, setToogleForm]= useState(false);
  // let toogleForm = false

  const [searchData, setSearchData] = useState("")
  const handleSearch = () => {
    let newArr = arrStudent.filter((val) => {
      return val.studentName.trim().toLowerCase().includes(searchData.trim().toLowerCase())
    })
    setStudents(newArr)
  }
  

  useEffect(() => {
    if (searchData.length == 0) {
      setStudents(arrStudent)
    }
   
  },[searchData])

  
  
  
  return (
    <div>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control 
            setSearchData={setSearchData} 
            searchData={searchData} 
            handleSearch={handleSearch} 
            setToogleForm={setToogleForm} 
            toogleForm={toogleForm}/>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent students={students}/>
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {/* if (toogleForm == true) {} */}
        {toogleForm ? <Form /> : ""}
        {/* END FORM SINH VIÊN */}
      </div>

    </div>
  )
}
