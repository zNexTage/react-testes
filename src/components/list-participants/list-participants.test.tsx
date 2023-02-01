import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import useListParticipants from '../../state/hooks/useListParticipants';
import ListParticipants from './list-participants';

// mock the useListParticipants
jest.mock('../../state/hooks/useListParticipants')

describe('List participants component with empty list', () => {
    beforeEach(()=>{
        (useListParticipants as jest.Mock).mockReturnValue([])
    })

    test('should be rederized without elements', () => {
        render(
            <RecoilRoot>
                <ListParticipants />
            </RecoilRoot>
        );

        const items = screen.queryAllByRole('listitem');

        expect(items).toHaveLength(0);
    });

});

describe('List components with elements',()=>{
    const participants = ['Master Chief', 'Cortana'];
    
    beforeEach(()=>{
        (useListParticipants as jest.Mock).mockReturnValue(participants);
    })

    test('render participants when they are pass via global state', () => {

        render(
            <RecoilRoot>
                <ListParticipants
                />
            </RecoilRoot>
        );

        const items = screen.queryAllByRole('listitem');

        expect(items).toHaveLength(participants.length);
    })
})