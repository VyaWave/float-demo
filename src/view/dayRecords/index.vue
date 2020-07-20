<template>
  <div class="day_records">
    <div class="header">
      <img src="@/assets/images/logo2.png" alt="" width="150" height="100">
    </div>
    <div class="centent">
      <div>
        <el-date-picker v-model="value" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd" :picker-options="pickerOptions">
        </el-date-picker>

        <el-button type="primary" @click="getData">查询</el-button>
      </div>
      <el-table :data="tableData" :header-cell-class-name="headerStyle" :cell-class-name="cellStyle" :border="true" style="width: 100%;margin-top:20px;">
        <el-table-column label="股票名称" width="240" fixed="">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="right" width="260">
              <el-form>
                <el-form-item label="股票名称">
                  <span>{{ scope.row.stockName }}</span>
                </el-form-item>
                <el-form-item label="股票代码">
                  <span>{{ scope.row.stockCode }}</span>
                </el-form-item>
                <el-form-item label="入场费">
                  <span>{{ scope.row.entranceFee }}</span>
                </el-form-item>
                <el-form-item label="每手股数">
                  <span>{{ scope.row.stockNumber }}</span>
                </el-form-item>
                <el-form-item label="乙组">
                  <span>{{ scope.row.yiZhuNumber }}</span>
                </el-form-item>
                <el-form-item label="招股价">
                  <span>{{ scope.row.priceRange }}</span>
                </el-form-item>
                <el-form-item label="发行价">
                  <span>{{ scope.row.ipoPrice || '暂无' }}</span>
                </el-form-item>
              </el-form>
              <div slot="reference" class="name-wrapper">
                <p>{{scope.row.stockName}} - ({{scope.row.stockCode}})</p>
                <!-- <p>({{scope.row.stockCode}})</p> -->
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column v-for="(item,index) in timeList" :key="index" :label="item.date.substring(5) + ' / ' + item.week " align="center">
          <!-- <template slot="header"> -->
          <!-- <i v-if="timeToTimestamp(item.date) - timeToTimestamp(today) < 60*60*24*1000 &&  timeToTimestamp(item.date) - timeToTimestamp(today) >0" class="el-icon-bottom-left badge"></i> -->
          <!-- <p>{{item.date.substring(5)}}</p> -->
          <!-- <p>{{item.week}}</p> -->
          <!-- </template> -->

          <template slot-scope="scope">
            <!-- <p v-if="timeToTimestamp(scope.row.stockDate.split(' ')[0])<= timeToTimestamp(item.date) && timeToTimestamp(scope.row.subEndDate.split(' ')[0]) >=timeToTimestamp(item.date)">认购</p> -->
            <p v-if="scope.row.luckyDate.split(' ')[0] == item.date">暗盘</p>
            <p v-if="scope.row.stockDate.split(' ')[0] == item.date">认购</p>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <img src="@/assets/images/footer.png" alt="" width="400">
      <p>© 1999-2020 版权所有 浙ICP备13033767号-17

      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dayRecords",
  data() {
    let today = new Date();
    today.setTime(new Date().getTime());
    today = today
      .toLocaleDateString()
      .split("/")
      .join("-");
    let url = "/api/stock/listForCalendar";
    if (location.port) {
      url = "https://kzz.mynatapp.cc/api/stock/listForCalendar";
    }
    return {
      // https://kzz.mynatapp.cc
      baseUrl: url,
      today: today.toString(),
      tableData: [],
      value: [],
      timeList: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex >= 1) {
        let item = this.timeList[columnIndex - 1];
        let str = "";
        if (
          this.timeToTimestamp(item.date) - this.timeToTimestamp(this.today) <
            60 * 60 * 24 * 1000 &&
          this.timeToTimestamp(item.date) - this.timeToTimestamp(this.today) > 0
        ) {
          str = "today";
        }
        if (
          this.timeToTimestamp(row.stockDate.split(" ")[0]) <= this.timeToTimestamp(item.date) &&
          this.timeToTimestamp(row.subEndDate.split(" ")[0]) >= this.timeToTimestamp(item.date)
        ) {
          return str + " blue";
        } else if (row.luckyDate.split(" ")[0] == item.date) {
          return str + " green";
        } else if (
          this.timeToTimestamp(item.date) - this.timeToTimestamp(row.subEndDate.split(" ")[0]) >
            0 &&
          this.timeToTimestamp(row.luckyDate.split(" ")[0]) > this.timeToTimestamp(item.date)
        ) {
          return str + " gray";
        }
        return str;
      }

      // console.log(row, column, rowIndex, columnIndex);
    },
    headerStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex >= 1) {
        let item = this.timeList[columnIndex - 1];
        let str = "";
        if (
          this.timeToTimestamp(item.date) - this.timeToTimestamp(this.today) <
            60 * 60 * 24 * 1000 &&
          this.timeToTimestamp(item.date) - this.timeToTimestamp(this.today) > 0
        ) {
          str = "today";
        }

        return str;
      }
      // console.log(row, column, rowIndex, columnIndex);
    },
    timestampToTime(timestamp) {
      // * 1000
      let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + "-";
      let M = (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-";
      let D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

      return Y + M + D;
    },
    timeToTimestamp(time) {
      let date = new Date(time);
      return Date.parse(date);
    },
    getWeek(date) {
      let week;
      if (date.getDay() == 0) week = "日";
      if (date.getDay() == 1) week = "一";
      if (date.getDay() == 2) week = "二";
      if (date.getDay() == 3) week = "三";
      if (date.getDay() == 4) week = "四";
      if (date.getDay() == 5) week = "五";
      if (date.getDay() == 6) week = "六";
      return week;
    },
    getData() {
      this.getTimeList();
      if (this.value.length) {
        let url = this.baseUrl + "?beginDate=" + this.value[0] + "&endDate=" + this.value[1];
        this.axios.get(url).then(res => {
          if (res.status == 200 && (res.data.code == 0 || res.data.code == 200)) {
            let data = res.data && res.data.data;
            this.tableData = data;
          } else {
            let msg = (res.data && res.data.msg) || "接口返回失败";
            this.$message.error(msg);
          }
        });
      }
    },
    getTimeList() {
      let start = this.value[0];
      let end = this.value[1];
      let len = (this.timeToTimestamp(end) - this.timeToTimestamp(start)) / (3600 * 1000 * 24);
      this.timeList = [];
      for (let i = 0; i < len; i++) {
        let date = this.timeToTimestamp(start) + 3600 * 1000 * 24 * i;
        let time = this.timestampToTime(date);
        this.timeList.push({
          date: time,
          week: this.getWeek(new Date(time))
        });
      }
    }
  },
  mounted() {
    document.title = "日历";
    let end = new Date();
    let start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 5);
    end.setTime(end.getTime() + 3600 * 1000 * 24 * 25);
    start = start
      .toLocaleDateString()
      .split("/")
      .join("-");
    end = end
      .toLocaleDateString()
      .split("/")
      .join("-");
    this.value = [start, end];
    this.getData();
  },
  destroyed() {}
};
</script>
<style lang="less" >
.demo-table-expand {
  font-size: 0;
}
.el-table tbody tr:hover > td {
  background-color: #dae9fa !important;
  color: #666;
}

.el-table th {
  padding: 0;
  .cell {
    padding: 12px 0;
  }
}

.header_style {
  font-weight: bold;
  color: #333;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
.el-table--border td.today,
.el-table--border th.today {
  border-left: 2px solid #ff7940;
  border-right: 2px solid #ff7940;
}
tr:last-child td.today {
  border-bottom: 4px solid #ff7940;
}
.el-table--border th.today {
  border-top: 2px solid #ff7940;
}
.blue {
  background-color: #409eff;
  color: #fff;
}
.green {
  background-color: rgb(94, 173, 8);
  color: #fff;
}
.gray {
  background-color: rgb(155, 155, 155);
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.badge {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  color: red;
}
.day_records {
  min-height: 100vh;
  position: relative;
  padding-bottom: 200px;
  .centent {
    padding: 20px;
  }
}
.header {
  background: rgb(55, 61, 66);
  width: 100%;
  height: 80px;
  img {
    width: 90px;
    height: 60px;
    margin-left: 20px;
    margin-top: 10px;
  }
}
.footer {
  background: rgb(55, 61, 66);
  height: 200px;
  width: 100%;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  padding-top: 20px;
}
</style>