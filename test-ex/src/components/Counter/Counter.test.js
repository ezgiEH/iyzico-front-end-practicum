import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';


describe ('counter Tests', ()=>{
    let count, increaseBtn, decreaseBtn

    beforeEach(()=> {
        render(<Counter />)
        count = screen.getByText('0')
        increaseBtn = screen.getByText('Increase')
        decreaseBtn = screen.getByText('Decrease')
    })

    it('renders increase btn', () =>{
        userEvent.click(increaseBtn) // increase btn'ı tıklayarak counter'ı 1 arttırıyoruz
        expect(count).toHaveTextContent('1') // ekranda 1 yazıp yazmadığını kontrol ediyoruz
    
    })
    
    it('renders decrease btn', () =>{
        userEvent.click(decreaseBtn)
        expect(count).toHaveTextContent('-1')
    })
})



