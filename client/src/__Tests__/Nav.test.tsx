import { render, screen} from "@testing-library/react";
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
    });
    test('if Nav with user no logged must render register and login', () => {
        render(
            <BrowserRouter>
                <Nav isLogged={false} userName={null}/>
            </BrowserRouter>

        );
        const register = screen.getByText('Register');
        const login = screen.getByText('Login');
        expect(register && login).toBeInTheDocument();
    });
    test('if Nav with user no logged must not render favorites', () => {
        render(
            <BrowserRouter>
                <Nav isLogged={false} userName={null}/>
            </BrowserRouter>

        );
        const favorites = screen.queryByText('Favorites');
        expect(favorites).not.toBeInTheDocument();
    });
})