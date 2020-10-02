const not_found = (collection = '') => { return { info: { info: `ไม่พบข้อมูล ${collection}` }, status: 404 } }

const bad_data = { info: { info: `ข้อมูลไม่ถูกต้อง` }, status: 400 }


module.exports = {
    not_found, bad_data
}