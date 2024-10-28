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

   
       

    
  }) })
})



//  MARCO 20

describe("When i click on the eye icon", () => {
  test('Then handleClickIconEye is called, updates the modal content and shows the modal', () => {
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
    window.localStorage.setItem('user', JSON.stringify({
      type: 'Employee'
    }))
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.append(root);
    router();
    window.onNavigate(ROUTES_PATH.Bills);
    document.body.innerHTML = BillsUI({ data: bills });
    const bill = new Bills({ document, onNavigate, store: null, localStorage });
    waitFor(() => screen.getAllByTestId("icon-eye"));
    const spy = jest.spyOn(bill, "handleClickIconEye");
    const iconEye = screen.getAllByTestId("icon-eye")[0];
    $.fn.modal = jest.fn();
    iconEye.click();
    expect(spy).toBeCalledTimes(1);
    expect($.fn.modal).toBeCalledWith("show");
  });
});

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


describe("When I navigate on Bills page",() => {
test("fetches bills from mock API GET", async () => {
  localStorage.setItem("user", JSON.stringify({ type: "Employee", email: "a@a" }));
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  document.body.append(root);
  router();
  window.onNavigate(ROUTES_PATH.Bills);


  await waitFor(() => {
    const textElement = screen.getByText("Mes notes de frais");
    expect(textElement).toBeTruthy();
  });

  const exempleTypeDeFacture = await screen.getByText("Transports");
  expect(exempleTypeDeFacture).toBeTruthy();

  const exempleStatutDeFacture = await screen.getByText("En attente");
  expect(exempleStatutDeFacture).toBeTruthy();

  expect(screen.queryAllByTestId("icon-eye")).toBeTruthy()
})

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