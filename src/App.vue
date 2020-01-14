<template>
  <div id="app">
    <div class="container">
      <b-modal id="showpro">
      ซื้อเล่มไม่ซ้ำกัน 2 เล่ม ลด 10% <br>
      ซื้อเล่มไม่ซ้ำกัน 3 เล่ม ลด 20% <br>
      ซื้อเล่มไม่ซ้ำกัน 4 เล่ม ลด 30% <br>
      ซื้อเล่มไม่ซ้ำกัน 5 เล่ม ลด 40% <br>
      ซื้อเล่มไม่ซ้ำกัน 6 เล่ม ลด 50% <br>
      ซื้อเล่มไม่ซ้ำกัน 7 เล่ม ลด 60% </b-modal>

      <b-modal id="addcago">คุณเพิ่มสินค้าลงตะกร้าแล้ว</b-modal>
      <b-modal id="bill">
        ยอดสั่งซื้อทั้งหมดจำนวน {{this.money[2]}} เล่ม<br>
        รวมเป็นเงิน {{this.money[1]}} บาท <br>
        ส่วนลด {{this.money[3]}} บาท <br>
        ยอดสุทธิ {{this.money[0]}} บาท
      </b-modal>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
          <b-navbar-brand href="#"><h1>BaanNaiDin</h1></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item v-b-modal="'showpro'"><h5>ดูโปรโมชั่น!!!</h5></b-nav-item>
            </b-navbar-nav>

            
            <b-navbar-nav class="ml-auto" >
                <b-button size="md" class="my-2 my-sm-0" variant="danger" @click="check()" v-b-modal="'bill'">ตะกร้าสินค้า</b-button>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>


      <b-table striped hover :items="items" :fields="fields">
        <!--<template v-slot:cell(image)="data" >
          <b-img  thumbnail fluid src=https://upload.wikimedia.org/wikipedia/th/a/a2/Hp_ps_thai.jpg alt="Image 2"></b-img>
        </template>-->
        <template v-slot:cell(button)="data" >
          <b-button size="sm" @click="insert(data.item.id)" variant="info" class="mr-2" v-b-modal.addcago>เพิ่มสินค้า</b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import backturn from './index-front'
export default {
  name: 'app',
  data() {
      return {
        money:[],
        ipbook:[],
        getbook:[],
        fields: [/*{key:'image',label:' '},*/{key:'book_name',label:'ชื่อหนังสือ'},{key:'price',label:'ราคา'},{key:'button',label:' '}],
        items: [
          { id:1001 , book_name: 'แฮร์รี่ พอตเตอร์ ศิลาอาถรรพ์', price: '100',img:'https://upload.wikimedia.org/wikipedia/th/a/a2/Hp_ps_thai.jpg'},
          { id:1002 , book_name: 'แฮร์รี่ พอตเตอร์ ห้องแห่งความลับ', price: '100' ,img:'https://upload.wikimedia.org/wikipedia/th/f/f9/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A5%E0%B8%B1%E0%B8%9A.jpg'},
          { id:1003 , book_name: 'แฮร์รี่ พอตเตอร์ นักโทษแห่งอัซคาบัน', price: '100' ,img:'https://upload.wikimedia.org/wikipedia/th/e/ee/%E0%B8%AD%E0%B8%B1%E0%B8%8B%E0%B8%84%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99.jpg'},
          { id:1004 , book_name: 'แฮร์รี่ พอตเตอร์ ถ้วยอัคนี', price: '100' ,img:'https://upload.wikimedia.org/wikipedia/th/4/4f/%E0%B8%96%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AD%E0%B8%B1%E0%B8%84%E0%B8%99%E0%B8%B5.jpg'},
          { id:1005 , book_name: 'แฮร์รี่ พอตเตอร์ ภาคีนกฟีนิกซ์', price: '100' ,img:'https://upload.wikimedia.org/wikipedia/th/d/dc/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%B5.jpg'},
          { id:1006 , book_name: 'แฮร์รี่ พอตเตอร์ เจ้าชายเลือดผสม', price: '100' ,img:'https://images-se-ed.com/ws/Storage/Originals/978616/041/9786160418169L.jpg?h=6830ac9dc771f469bc224df9326f137d'},
          { id:1007 , book_name: 'แฮร์รี่ พอตเตอร์ เครื่องรางยมทูต', price: '100' ,img:'https://upload.wikimedia.org/wikipedia/th/thumb/f/f1/Hp7childus.jpg/220px-Hp7childus.jpg'}
        ]
      }
    },
    methods:{
      
      insert(id){
        this.ipbook.push(id)
        // eslint-disable-next-line no-console
        console.log("เพิ่มสินค้าแล้ว",this.ipbook)
      },

      check(){
        for(let i=0 ; i<7 ; i++){
            this.getbook[i] = 0
        }
        // eslint-disable-next-line no-console
        console.log("รายละเอียด",this.getbook.length)
        for(let i=0 ; i<this.ipbook.length ; i++){
            switch(this.ipbook[i]){
              case 1001: this.getbook[0]++; break;
              case 1002: this.getbook[1]++; break;
              case 1003: this.getbook[2]++; break;
              case 1004: this.getbook[3]++; break;
              case 1005: this.getbook[4]++; break;  
              case 1006: this.getbook[5]++; break;
              case 1007: this.getbook[6]++; break;
            }
        }
        // eslint-disable-next-line no-console
        console.log("รายละเอียด",this.getbook)
        this.trantoback()
      },
      async trantoback(){
          let getbooks = this.getbook
          let getValue = await backturn({"data":getbooks})
      
          if(getValue){
              //ต่าresultที่ขาย
              this.money[0] = getValue.result.sum1
              //ค่าtotalก่อนลดdiscount
              this.money[1] = getValue.result.sum2
              //จำนวนหนังสือ
              this.money[2] = this.money[1]/100
              //ส่วนลด
              this.money[3] = this.money[1]-this.money[0]

              this.money.push('push')
              this.money.pop()

              // eslint-disable-next-line no-console
              console.log("result",this.money[0])
              // eslint-disable-next-line no-console
              console.log("total",this.money[1])
          }
      }

    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
