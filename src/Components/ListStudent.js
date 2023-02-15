import React from 'react'
import Student from './Student';
export default function ListStudent(props) {
    let {students} = props;

    // từ Student ---> render 1 danh sách các component student 
    let elementListTudent = students.map((st, index )=>{
        return <Student key={index} stt={index + 1} student={st} />
    }
    )
    return (
        <div>
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>                       
                                {elementListTudent}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
