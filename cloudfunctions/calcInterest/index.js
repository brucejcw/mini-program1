// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

const getRealInterestRate = function (t, amount,year) {
  return t / (amount * (year - (year - 1) / 2)) * 100
}

const getExpectedInterestList = function (amount, year, interestRate) {
  const interestList = []
  let expectedInterestSum = 0

  for (let i = year; i > 0; i--) {
    const obj = {
      formula: `${amount} * ${i/4}(每年) * ${interestRate} / 100`,
      value: amount * i/4 * interestRate/100,
      year: year - i + 1,
    }
    expectedInterestSum += obj.value
    interestList.push(obj)
  }
  return {
    interestList,
    expectedInterestSum
  }
}

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 *
 * event 参数包含小程序端调用传入的 data
 *
 */
exports.main = async (data) => {
  const {
    interestRate,
    amount,
    year,
  } = data
  const totalInterest = interestRate / 100 * amount * year
  const realInterestRate = getRealInterestRate(totalInterest, amount, year)
  const { interestList: expectedInterestList, expectedInterestSum } = getExpectedInterestList(amount, year, interestRate)
  return {
    totalInterest,
    realInterestRate,
    expectedInterestList,
    expectedInterestSum,
  }
}

