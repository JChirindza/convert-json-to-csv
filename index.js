const XLSX = require('xlsx')
const students = [
    { name: 'Joao', email: 'johnchirindza@gmail.com', age: 25, gender: 'M' },
    { name: 'Miguel', email: 'alsonmiguel@gmail.com', age: 20, gender: 'M' }
]

const convertJsonToCSV = () => {

    const workSheet = XLSX.utils.json_to_sheet(students);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "students")

    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })

    // Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

    XLSX.writeFile(workBook, "studentsData.xlsx")
}

convertJsonToCSV()