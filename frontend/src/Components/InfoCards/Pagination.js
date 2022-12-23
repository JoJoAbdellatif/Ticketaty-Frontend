import Pagination from 'react-bootstrap/Pagination';
import './styles.scss'
function Paginate() {
    return (
      <Pagination className='Pages'>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
       
        <Pagination.Item style={{}}>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Item>{7}</Pagination.Item>
  
      
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
  }
  
  export default Paginate;