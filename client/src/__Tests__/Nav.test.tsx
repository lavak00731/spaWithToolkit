import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom';
import { Nav } from "../components/Nav";
import { BrowserRouter } from "react-router";

describe('All Nav tests', ()=>{
    test('if Nav is rendered not user logged', () => {
        render(
            <BrowserRouter>
                <Nav isLogged={false} userName={null}/>
            </BrowserRouter>

        );
        const nav = screen.getByLabelText('Main Nav');
        expect(nav).toBeInTheDocument();
    })
    test('if Nav with user no logged rendered user link', () => {
        render(
            <BrowserRouter>
                <Nav isLogged={false} userName={null}/>
            </BrowserRouter>

        );
        const nav = screen.getByLabelText('Main Nav');
        //const loggedLink = within(nav).get
        expect(nav).toBeInTheDocument();
    })
})