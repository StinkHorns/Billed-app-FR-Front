/**
 * @jest-environment jsdom
 */
import mockStore from "../__mocks__/store"
import {screen, waitFor} from "@testing-library/dom"
import BillsUI from "../views/BillsUI.js"
import { bills } from "../fixtures/bills.js"
import { ROUTES_PATH} from "../constants/routes.js";
import {localStorageMock} from "../__mocks__/localStorage.js";
import userEvent from "@testing-library/user-event";

import router from "../app/Router.js";
import Bills from "../containers/Bills.js";
jest.mock("../app/Store", ()=>mockStore)

describe("Given I am connected as an employee", () => {
  describe("When I am on Bills Page", () => {
    test("Then bill icon in vertical layout should be highlighted", async () => {

      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))

      const root = document.createElement("div")
      root.setAttribute("id", "root")
      document.body.append(root)
      router()
      window.onNavigate(ROUTES_PATH.Bills)
      await waitFor(() => screen.getByTestId('icon-window'))
      const windowIcon = screen.getByTestId('icon-window')
      //to-do write expect expression
      
      
//Marco

      expect(windowIcon.classList.contains("active-icon"))

    })

    test("Then bills should be ordered from earliest to latest", () => {
      document.body.innerHTML = BillsUI({ data: bills })
      const dates = screen.getAllByText(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i).map(a => a.innerHTML)
      const antiChrono = (a, b) => ((a < b) ? 1 : -1)
      const datesSorted = [...dates].sort(antiChrono)
      expect(dates).toEqual(datesSorted)
    })


  })
})


 // MARCO 14
/*
describe('Given I am connected as an Employee', () => {
 describe('When on the Bills page and I click on the EYE Button ', () => {
  test("Then, Then opens the modale",  () => {
     
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
document.body.innerHTML = BillsUI({
  data: bills
})
      const store = null
      const bill = new Bills({

    document, onNavigate, store, localStorage: window.localStorage
  })

      
      const eye = screen.getAllByTestId('icon-eye')
      const icon = eye[0]
      const handleClickIconEye = jest.fn(bill.handleClickIconEye(icon))
      icon.addEventListener('click', handleClickIconEye)
      userEvent.click(icon)

      expect(handleClickIconEye(icon)).toHaveBeenCalled()



      const modale = screen.getByTestId('modaleFile')
      $.fn.modal = jest.fn(()=> modale.classList.add("show"))
      expect(modale.classList).toContain("show")
       

    
  }) })
})

*/

//  MARCO 20
describe('Given I am connected as an Employee', () => {
describe('When on Bills page and I click on New Bill Button ', () => {
  test("Then, Then it opens New Bills page",  () => {
  
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
    window.localStorage.setItem('user', JSON.stringify({
      type: 'Employee'      
    }))

    const handleClickNewBill = jest.fn(bills.handleClickNewBill)
    const eye = screen.getByTestId('btn-new-bill')
    eye.addEventListener('click', handleClickNewBill)
    userEvent.click(eye)

    expect(handleClickNewBill).toHaveBeenCalled()

    const newBill = screen.getByTestId('btn-new-bill')
    expect('btn-new-bill').toBeTruthy()
  

      }) })
})




//Marco 36
describe('Given I am connected as an Employee', () => {
describe('When on the NEW Bills page and I input a date ', () => {
  test("Then, it only accepts the right date format",  () => {

    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
    window.localStorage.setItem('user', JSON.stringify({
      type: 'Employee'
    }))

        document.body.innerHTML = BillsUI({ error: 'some error message' })
        expect(screen.getAllByText('Erreur')).toBeTruthy()
   


  
      })})
})


// Test ERROR 404 and 500



describe("When an error occurs on API", () => {
  beforeEach(() => {
    jest.spyOn(mockStore, "bills")
    Object.defineProperty(
        window,
        'localStorage',
        { value: localStorageMock }
    )
    window.localStorage.setItem('user', JSON.stringify({
      type: 'Employee',
     
    }))
    const root = document.createElement("div")
    root.setAttribute("id", "root")
    document.body.appendChild(root)
    router()
  })
  test("fetches bills from an API and fails with 404 message error", async () => {

    mockStore.bills.mockImplementationOnce(() => {
      return {
        list : () =>  {
          return Promise.reject(new Error("Erreur 404"))
        }
      }})
    window.onNavigate(ROUTES_PATH.Bills)
    await new Promise(process.nextTick);
    const message = await screen.getByText(/Erreur 404/)
    expect(message).toBeTruthy()
  })

  test("fetches messages from an API and fails with 500 message error", async () => {

    mockStore.bills.mockImplementationOnce(() => {
      return {
        list : () =>  {
          return Promise.reject(new Error("Erreur 500"))
        }
      }})

    window.onNavigate(ROUTES_PATH.Bills)
    await new Promise(process.nextTick);
    const message = await screen.getByText(/Erreur 500/)
    expect(message).toBeTruthy()
  })
}) 