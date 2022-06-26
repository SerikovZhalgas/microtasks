import React from "react";

type NewComponentType = {
    topCars: TopCarsType[]
    students: StudentsType[]
}

type TopCarsType = {
    id: number
    manufacturer: string
    model: string
}

type StudentsType = {
    id: number
    name: string
    age: number
}

const NewComponent = (props: NewComponentType) => {
    /*return (
        <ul>
            {props.students.map((objectFromStudentArray, index)=> {
                return (
                    <div>
                        <li key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span> age: {objectFromStudentArray.age}</span>
                        </li>
                    </div>
                )
            })}
        </ul>
    )*/
    return (
        <table>
            {props.topCars.map((object, index) => {
                return (
                    <tr>
                        <th key={object.id}>{object.manufacturer}</th>
                        <th key={object.id}>{object.model}</th>
                    </tr>
                )
            })}
        </table>
    )
}

export default NewComponent;