import styled from "styled-components"

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const RowSpaceBetweenCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-between;
  width: 100%;
  heigth: 100%;
`
export const RowSpaceBetweenStart = styled.div`
  display: flex;
  flex-direction: row;
  align-item: flex-start;
  justify-content: space-between;
  width: 100%;
`
export const RowCenter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`
export const RowEnd = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
`
export const RowStart = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
`

export const CenterStartColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

export const CenterMiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CenterEndColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`

export const CenterBetweenColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
