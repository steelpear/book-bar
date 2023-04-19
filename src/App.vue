<template>
  <div id="app" class="cost-bar-wrap">
    <el-row>
      <el-col :xs="24" :sm="24" :md="17" :lg="17" :xl="17" style="padding: 10px 0 13px 0;">
        <div class="picker-title">Даты заезда и выезда</div>
        <el-row class="section1">
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="subsection1">
            <el-date-picker
              v-model="dates"
              type="daterange"
              range-separator="—"
              start-placeholder="Заезд"
              end-placeholder="Выезд"
              format="dd.MM.yyyy"
              :picker-options="{firstDayOfWeek:1}"
              clear-icon="el-icon-close"
              popper-class="date-picker"
              :editable="false"
              >
            </el-date-picker>
          </el-col>
          <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11">
            <el-dropdown ref="dropdown" trigger="click" placement="bottom" :hide-on-click="false">
              <div class="el-dropdown-link">
                <el-col :span="11">
                  <el-row align="middle" justify="center" type="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="40px" style="margin-right:2px;"><path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" /></svg>
                    <div>
                      <div class="__label">Взрослых</div>
                      <div>{{adults}}</div>
                    </div>
                  </el-row>
                </el-col>
                <el-col :span="2" class="hidden-xs-only">
                  <el-row align="middle" justify="center" type="flex">
                    <el-divider direction="vertical" content-position="right"></el-divider>
                  </el-row>
                </el-col>
                <el-col :span="11">
                  <el-row align="middle" justify="center" type="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="40px" style="margin-right:2px;"><path d="M7 2C5.9 2 5 2.9 5 4S5.9 6 7 6 9 5.11 9 4 8.11 2 7 2M5 7C3.89 7 3 7.89 3 9V15H5V22H10V11.6L12.53 16H14.97L16 14.66V22H20V17H21V14C21 12.89 20.11 12 19 12H16.5C15.9 12 15.37 12.26 15 12.68C14.67 13.1 14.32 13.56 14 14H13.69L10 7.66C9.84 7.38 9.22 7 8.5 7H5M18 8C17.17 8 16.5 8.67 16.5 9.5S17.17 11 18 11 19.5 10.33 19.5 9.5 18.83 8 18 8Z" /></svg>
                    <div>
                      <div class="__label">Детей</div>
                      <div>{{childs.length}}</div>
                    </div>
                  </el-row>
                </el-col>
              </div>
              <el-dropdown-menu slot="dropdown">
                <div class="drop-wrap">
                  <el-row align="middle" justify="space-between" type="flex">
                    <div>
                      <el-row align="bottom" type="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="28px" style="margin-right:2px;"><path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" /></svg>
                        <div style="margin: 0 0 1px 4px;">Взрослых</div>
                      </el-row>
                    </div>
                    <div>
                      <el-button size="small" icon="el-icon-minus" circle @click="delAdult"></el-button>
                      <span style="padding:0 10px;font-size: 17px;">{{ adults }}</span>
                      <el-button size="small" icon="el-icon-plus" circle @click="addAdult"></el-button>
                    </div>
                  </el-row>
                  <div v-for="(item, index) in childs" :key="index" style="margin:9px 0 7px 0px;">
                    <el-row align="middle" justify="space-between" type="flex">
                      <el-col :span="11">
                        <el-row align="middle" type="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="28px"><path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M11,22H8V16H6V9H18V16H16V22H13V18H11V22Z" /></svg>
                          <div style="margin-left:5px;">Ребёнок&nbsp;{{ index + 1 }}</div>
                        </el-row>
                      </el-col>
                      <el-col :span="10">
                        <el-row align="top" justify="space-between" type="flex">
                          <div style="margin:-2px 4px 0 0;font-size: 18px;">*</div>
                          <el-select
                            v-model="item.age"
                            placeholder="Возраст"
                            popper-class="select"
                            size="small"
                            @change="handleChange"
                          >
                            <el-option
                              v-for="age in ages"
                              :key="age"
                              :value="age">
                            </el-option>
                          </el-select>
                          <el-button size="small" icon="el-icon-minus" circle style="margin-left:10px;" @click="delChild(index)"></el-button>
                        </el-row>
                      </el-col>
                    </el-row>
                  </div>
                  <el-divider></el-divider>
                  <el-row align="middle" justify="space-between" type="flex">
                    <div>
                      <el-row align="bottom" type="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="28px" style="margin-right:2px;"><path d="M7 2C5.9 2 5 2.9 5 4S5.9 6 7 6 9 5.11 9 4 8.11 2 7 2M5 7C3.89 7 3 7.89 3 9V15H5V22H10V11.6L12.53 16H14.97L16 14.66V22H20V17H21V14C21 12.89 20.11 12 19 12H16.5C15.9 12 15.37 12.26 15 12.68C14.67 13.1 14.32 13.56 14 14H13.69L10 7.66C9.84 7.38 9.22 7 8.5 7H5M18 8C17.17 8 16.5 8.67 16.5 9.5S17.17 11 18 11 19.5 10.33 19.5 9.5 18.83 8 18 8Z" /></svg>
                        <div style="margin: 0 0 1px 4px;">Добавить ребёнка</div>
                      </el-row>
                    </div>
                    <el-button size="small" icon="el-icon-plus" circle @click="addChild"></el-button>
                  </el-row>
                  <div v-if="childs.length > 0" style="line-height:14px;">
                    <div style="font-size:12px;margin-top:7px; margin-bottom:5px;">
                      <span style="font-weight: 500;">*Возраст ребёнка на момент заезда.</span>
                      <span style="color:rgba(0,0,0,.7);">Укажите, пожалуйста, возраст каждого ребенка, чтобы мы могли подобрать лучшие варианты по кроватям, размеру номера и специальным ценам.</span>
                    </div>
                  </div>
                  <el-divider v-if="childs.length < 1"></el-divider>
                  <el-button type="text" class="text-btn" @click="submitForm">Посмотреть цены</el-button>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7">
        <el-button type="primary" class="__btn" @click="submitForm">Посмотреть цены</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    adults: 2,
    childs: [],
    ages: ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'],
    dates: [],
    menu: false,
    menuGuests: false
  }),
  created () {
    const startDate = new Date()
    const endDate = new Date()
    startDate.setDate(new Date().getDate() + 19)
    endDate.setDate(new Date().getDate() + 26)
    this.dates = [startDate.toISOString().slice(0, 10), endDate.toISOString().slice(0, 10)]
  },
  methods: {
    addAdult () {
      if (this.adults !== 20) ++this.adults
    },
    delAdult () {
      if (this.adults !== 1) --this.adults
    },
    addChild () {
      const child = {age: '7'}
      this.childs.push(child)
    },
    delChild (index) {
      this.childs.splice(index,1)
    },
    submitForm () {
      let childs = this.childs.map(item => { return '&childs[]=' + item.age}).join('')
      window.location.href = "/booking?date_start=" + new Date(this.dates[0]).toLocaleDateString() + "&date_end=" + new Date(this.dates[1]).toLocaleDateString() + "&adults=" + this.adults + childs
    },
    handleChange() {
      this.$nextTick(() => {
        this.$refs.dropdown.show()
      })
    }
  }
}
</script>

<style>
.cost-bar-wrap {
  max-width: 900px;
  box-shadow: 0 0 15px rgba(0,0,0,.15);
  background: white;
  font-family: 'Helvetica Neue',Helvetica;
}
.picker-title {
  font-size:13px;
  margin-left: 20px;
  margin-bottom: 3px;
}
.__btn {
  min-height: 86px;
  border-radius: unset !important;
  font-size: 20px !important;
  width: 100% !important;
  letter-spacing: .04em !important;
  font-family: 'Helvetica Neue',Helvetica;
  font-weight: 400 !important;
  box-shadow: 0 -15px 15px -15px rgba(0,0,0,.15), 15px 0 15px -15px rgba(0,0,0,.15), 0 15px 15px -15px rgba(0,0,0,.15);
}
.el-divider--vertical {height: 2em !important;}
svg {fill:rgba(0,0,0,.7);}
.el-date-editor {
  width: 300px !important;
  border-color: rgba(0,0,0,.3) !important;
  min-height: 45px !important;
  cursor: pointer;
}
.el-date-editor .el-range-separator {line-height: 38px !important;}
.el-range-editor .el-range-input {
  font-size:16px !important;
  color:rgba(0,0,0,.8) !important;
  cursor: pointer;
  }
  .__label {font-size: 15px;}
  .el-dropdown {
    width:100% !important;
    color: unset !important;
    font-size: unset !important;
  }
  .el-dropdown-link {cursor: pointer;}
  .drop-wrap {
    width: 330px;
    padding: 10px 15px;
    font-family: 'Helvetica Neue',Helvetica;
    font-size: 15px;
  }
  .el-divider--horizontal {margin: 12px 0 !important;}
  .el-button.is-circle {border-color: rgba(0,0,0,.5) !important;}
  [class*=" el-icon-"], [class^=el-icon-] {
    color: rgba(0,0,0,.9) !important;
    font-weight: 600 !important;
  }
  .select {
    font-family: 'Helvetica Neue',Helvetica;
  }
  .select li {
    height: 28px !important;
    line-height: 28px !important;
    color: rgba(0,0,0,.9) !important;
    text-align: center;
  }
  .el-input__inner {
    color: rgba(0,0,0,.9) !important;
    border-color: rgba(0,0,0,.4) !important;
  }
  .text-btn {
    width: 100% !important;
    padding: unset !important;
    margin-top: 10px !important;
    color: #409EFF !important;
    font-size: 15px !important;
    font-family: 'Helvetica Neue',Helvetica;
  }
  .date-picker {
    font-family: 'Roboto';
    color: rgba(0,0,0,.9) !important;
  }
  .el-date-table {font-size: 13px !important;}
  .el-date-range-picker__header div {font-weight: 400 !important;}
  .section1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    .section1 {
      display: block;
      text-align: center;
    }
    .subsection1 {margin-bottom: 5px;}
    .picker-title {
      text-align: center;
      margin-left: unset;
    }
  }
</style>
