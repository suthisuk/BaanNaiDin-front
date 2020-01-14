import axios from 'axios'
//async เพราะมันfuncเอาไว้ส่งค่ารับค่า
async function backturn(result) {
    //awaitบอกว่าทำบรรทัดนี้ก่อนไปทำบรรทัดข้างล่างมัน
    const res = await axios.post('https://baannaidin-back.herokuapp.com/submit', result)
    return res.data
}

export default backturn