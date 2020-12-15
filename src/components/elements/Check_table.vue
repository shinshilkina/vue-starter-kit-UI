<template>
  <table class="check-table">
    <tbody>
      <tr>
        <td class="check-table__sum-text row-text" colspan="2">
          <span>{{ this.cost }}{{ this.currency }} x {{this.countDays}} суток</span>
        </td>
        <td class="check-table__row-sum-result row-result">
          <span>{{ this.costNumber }}{{ this.currency }}</span>
        </td>
      </tr>
      <tr>
        <td class="check-table__discount-text row-text">
          <span>Сбор за услуги: скидка {{ this.discount }}{{ this.currency }}</span>
        </td>
        <td class="check-table__discount-icon row-icon">
          <span class="row-icon__body">i</span>
        </td>
        <td class="check-table__row-discount-result row-result">
          <span>0{{ this.currency }}</span>
        </td>
      </tr>
      <tr>
        <td class="check-table__compl-serv-text row-text">
          <span>Сбор за дополнительные услуги</span>
        </td>
        <td class="check-table__compl-serv-icon row-icon">
          <span class="row-icon__body">i</span>
        </td>
        <td class="check-table__row-compl-serv-result row-result">
          <span>{{ this.complServ }}{{ this.currency }}</span>
        </td>
      </tr>
      <tr class="total">
        <td class="check-table__total-text total-text"  colspan="2">
          <span>Итого</span>
        </td>
        <td class="check-table__total-result total-result">
          <span>{{ this.resultCost }}{{ this.currency }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
name: "Check_table.vue",
  props: {
    cost: {type: Number, default: 9990},
    countDays: {type: Number, default: 4},
    discount: {type: Number, default: 2179},
    complServ: {type: Number, default: 300},
    currency: {type: String, default: '₽'}
  },
  data() {
  let costNumber = 39960;
  let resultCost = 38081;
    return {
      costLocal: this.cost,
      countDaysLocal: this.countDays,
      discountLocal: this.discount,
      complServLocal: this.complServ,
      currencyLocal: this.currency,
      costNumber,
      resultCost
    }
  }
}
</script>

<style lang="scss">
@import "../style";
.check-table {
  width: 100%;
  margin: 0;
  tr, .row-text, .row-result {
    display: flex;
  }
  tr {
    justify-content: space-between;
    height: 35px;
  }
  span {
    word-wrap: break-word;
  }
  .row-result {
    width: 71px;
    display: flex;
    justify-content: flex-end;
  }
  .row-icon {
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $darkShade25;
    border-radius: 50%;
    span {
      color: $darkShade25;
    }
  }
  .total {
    margin-top: 32px;
    span {
      font-size: 19px;
      line-height: 24px;
      font-weight: bold;
      color: $darkShade100;
    }
    &-text {
      display: flex;
    }
  }
}
</style>
