import { render, screen, within} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom';
import { Products } from "../views/Products";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from './../app/store';

describe('Test related to Products Page', () => {
    test('Test if Products page is rendered', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Products />
                </Provider>                
            </BrowserRouter>
        )
        const title = screen.getByText("Products");
        expect(title).toBeInTheDocument();
    })
    test('Test if Products render 10 products', async() => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Products />
                </Provider>                
            </BrowserRouter>
        )
        const list = screen.getByTestId('product-list');
        const { findAllByRole } = within(list);
        const items = await findAllByRole("listitem");       
        expect(items).toHaveLength(10);
    })
})