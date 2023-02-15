import React from 'react'

export default function Student(props) {

    let {stt,student} = props;
    
    return (
        <tr>
            <td>{stt}</td>
            <td>{student.studentId}</td>
            <td>{student.studentName}</td>
            <td>{student.age}</td>
            <td>{student.sex?"NỮ":"Nam"}</td>
            <td>
                <div className="template-demo">
                    <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                    >
                        Xem
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                    >
                        Sửa
                    </button>
                    <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
  )
}
