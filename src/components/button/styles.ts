import styled from 'styled-components';
import tm from 'twin.macro';

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
    ${tm`p-2 rounded-lg border font-bold`}

    ${(props) => {
        switch (props.variant) {
            case 'primary':
                return tm`text-white bg-blue-500`;
            case 'secondary':
                return tm`text-blue-500 bg-white border-blue-500`;
        }
    }}
`;
