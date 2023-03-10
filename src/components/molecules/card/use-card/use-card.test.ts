import { renderHook, act } from "@testing-library/react";
import { gifsMocks } from "../../../../utils/mocks/gifsMocks";
import ContextMock from "../../../../utils/mocks/ContextMock";
import useCard from "./use-card";

describe('Test useCard', () => {
  it('should openModal an closeModal', () => {
    const { result } = renderHook(() => useCard(gifsMocks.data[0]), { 
      wrapper: ContextMock,
      initialProps: {
        values:{
          gifs: gifsMocks.data
        }
      }
    })
    
    act(() => result.current.handleOpenModal())
    expect(result.current.openModal).toBeTruthy()

    act(() => result.current.closeModal())
    expect(result.current.openModal).toBeFalsy()
  })
})