/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/dom"
import NewBillUI from "../views/NewBillUI.js"
import NewBill from "../containers/NewBill.js"
import userEvent from "@testing-library/user-event"
import { fireEvent } from "@testing-library/dom"
import {localStorageMock} from "../__mocks__/localStorage.js";

/// 6
describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page and I click on Envoyer", () => {
    test("Then it submits the New Bill info", () => {
      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))

      const html = NewBillUI()
      
      document.body.innerHTML = NewBillUI()


      //to-do write assertion

 const onNavigate = (pathname) => {
        document.body.innerHTML = ROUTES({ pathname })
      }
    const store = null

    const bills = new NewBill({
        document, onNavigate, store, localStorage
      })

     
     
    
      const submitButton = screen.getByTestId("form-new-bill")
      const handleSubmit = jest.fn((e) => bills.handleSubmit(e, bills[0]))
      submitButton.addEventListener("click", handleSubmit)
      fireEvent.click(handleSubmit)
      expect(handleSubmit).toHaveBeenCalled()

    })
  })
})


/// 
    
/// Choose file

describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page and click on Choose file", () => {
    test("Then it opens window to select file", () => {


      Object.defineProperty(window, 'localStorage', { value: localStorageMock })
      window.localStorage.setItem('user', JSON.stringify({
        type: 'Employee'
      }))
      
      document.body.innerHTML = NewBillUI()
            const store = null
            const bill = new NewBill({
      
          document, onNavigate, store, localStorage: window.localStorage
        })
        const formNewBill = screen.getByTestId('form-new-bill')
        const handleSubmit= jest.fn(bill.handleSubmit)
        formNewBill.addEventListener("submit", handleSubmit)
        
        userEvent.submit(formNewBill)
  
        expect(handleSubmit).toHaveBeenCalled()
  

   
    }) 
  })
})
/*
/// Input Date

describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page and click on Date", () => {
    test("Then it will let me input date ", () => {

      
      
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
*/

////  Pruebas --- TOP
describe("Given I am connected as an employee", () => {
  describe("When I am on NewBill Page and click on Type de dépense", () => {
  
    
test("creates new bill from mock API POST", async () => {
  //arrange
  localStorage.setItem(
    "user",
    JSON.stringify({ type: "Employee", email: "e@e" })
  );
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  document.body.append(root);
  router();

  //act
  window.onNavigate(ROUTES_PATH.NewBill);
  const submitBtn = document.getElementById("btn-send-bill");
  submitBtn.click();

  //assert

  await waitFor(() => screen.getByText("Mes notes de frais"));
  const contentPage = await screen.getByText("Mes notes de frais");
  expect(contentPage).toBeTruthy();
});
})
    })


/// Pruebas --- END


// Test ERROR 404 and 500

/*

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
    window.onNavigate(ROUTES_PATH.NewBill)
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

    window.onNavigate(ROUTES_PATH.NewBill)
    await new Promise(process.nextTick);
    const message = await screen.getByText(/Erreur 500/)
    expect(message).toBeTruthy()
  })
}) */