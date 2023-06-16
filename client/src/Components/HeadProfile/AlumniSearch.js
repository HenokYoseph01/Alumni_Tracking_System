import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Axios from 'axios'

export default function HeadAlumniSearch () {
    const data = useLoaderData();

    const PAGE_SIZE = 3
      
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('')
  const [searchTerm,setSearchTerm] = useState('')
  const [students,setStudents] = useState(data.alumnus)

  useEffect(()=>{
    //Handle search
  const searchHandler = async()=>{
    try {
        const res = await Axios.get(`https://alumni-track-system-kr9h.onrender.com/api/v1/head/specific?search=${searchTerm}`)
        setStudents(res.data.data.outcome)
    } catch (error) {
        console.log(error.response)
    }
  }
    searchHandler(); 
  },[searchTerm])

  const totalPages = Math.ceil(students.length / PAGE_SIZE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentStudents = students.slice(startIndex, endIndex);

  

  return (
    <div>
      <div className="input-group mb-3">
      <input type="text" className="form-control mt-3" placeholder="Search" aria-label="Search" aria-describedby="search-button" onChange={(e)=>setSearch(e.target.value)} />
      <button className="btn btn-outline-secondary mt-3" id="search-button" onClick={()=>setSearchTerm(search)}>Search</button>
    </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>GPA</th>
            <th>Occupation</th>
            <th>Email</th>
            <th>Phone Number 1</th>
            <th>Phone Number 2</th>
            <th>Department</th>
            <th>Graduation Year</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.first_name} {student.last_name} {student.grandfather_name}</td>
              <td>{student.gpa}</td>
              <td>{student.occupation}</td>
              <td>{student.email}</td>
              <td>{student.phone_number}</td>
              <td>{student.phone_number_alt}</td>
              <td>{student.department}</td>
              <td>{student.date_of_graduation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
            <button className="page-link" onClick={handlePrevPage}>Previous</button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <li key={pageNumber} className={`page-item ${pageNumber === currentPage && 'active'}`}>
                <button className="page-link" onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</button>
              </li>
            );
          })}
          <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
            <button className="page-link" onClick={handleNextPage}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const HeadAlumniSearchLoader = async()=>{
    try {
        const res = await Axios.get('https://alumni-track-system-kr9h.onrender.com/api/v1/head/alumni')
        const data = {
            alumnus: res.data.data.alumnus,
            length: res.data.length
        }
        return data
    } catch (error) {
        
    }
}