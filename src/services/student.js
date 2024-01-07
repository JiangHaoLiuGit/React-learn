export async function fetchAllStudents(){
    return await fetch("http://jsonplaceholder.typicode.com/posts")
        .then(resp => resp.json()).then(resp => resp)
  
}