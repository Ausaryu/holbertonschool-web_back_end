export default function getListStudentIds(array) {
    if (!Array.isArray(array)) {
        return [];
    }
    return array.filter(student => student.id)
}
