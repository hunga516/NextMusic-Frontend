import styled from "styled-components/macro";

export const Wrapper = styled.div`
    width: 100%;
    max-height: calc(100vh - 90px);
    background-color: white;
    user-select: none;
    overflow-y: auto;
`;

export const Container = styled.div`
    padding: 72px 32px 32px 32px;
    width: 100%;
    h3 {
        font-size: 32px;
        font-weight: 700;
        color: black;
    }
`;

export const Top = styled.div`
    width: 100%;
`;

export const TopInner = styled.div`
    margin: 20px 0 32px 0;
    height: 100%;
    width: 100%;
    display: grid;
    column-gap: 24px;
    row-gap: 16px;
`;

export const RecommendedSection = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 24px;
    margin-bottom: 104px;
`;