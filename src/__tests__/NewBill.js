/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"

/// 6
describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page and I click on Envoyer", () => {
    test("Then it submits the New Bill info", () => {
      const html = NewBillUI()
      document.body.innerHTML = NewBillUI(bills[0])


      //to-do write assertion


      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
      const store = null
      const bilss = new Bills({
        document, onNavigate, store, bills, localStorage: window.localStorage
      })
      const submitButton = screen.getByTestId("form-new-bill")
      const handleSubmit = jest.fn((e) => bills.handleSubmit(e, bills[0]))
      submitButton.addEventListener("click", handleSubmit)
      fireEvent.click(handleButton)
      expect(handleSubmit).toHaveBeenCalled()

    })
  })
})


/// 

/// Choose file

describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page and Choose file", () => {
    test("Then it opens window to select file", () => {

      const html = NewBillUI()
      document.body.innerHTML = NewBillUI(bills[0])

      const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }

      const store = null
      const bilss = new Bills({
        document, onNavigate, store, bills, localStorage: window.localStorage
      })
      
      const chooseFile = screen.getByTestId("file")
      const sendFile = jest.fn((e) => bills.sendFile(e, bills[0]))
      chooseFile.addEventListener("click", sendFile)
      fireEvent.click(sendFile)
      expect(sendFile).toHaveBeenCalled()

    })
  })
})

/// Input Date

describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page and click on Date", () => {
    test("Then it will let me inpute date ", () => {

      
      
    })
  })
})

/// Input Date

describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page and click on Type de dépense", () => {
    test("Then an option has to be chosen ", () => {

      
      
    })
  })
})

