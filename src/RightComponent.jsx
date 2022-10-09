import {
  SContainer,
  SItemWrapper,
  SText,
  SBorder,
  SButton,
} from "./sharedStyles";

export const RightComponent = (props) => {
  const { lists, onClick } = props;
  return (
    <SContainer>
      <SItemWrapper>
        <ul>
          {lists.map((list, index) => (
            <SText>
              <SBorder>
                <div key={index}>{list.name}</div>
              </SBorder>
            </SText>
          ))}
        </ul>
      </SItemWrapper>
      <SButton onClick={onClick}>左へ移動</SButton>
    </SContainer>
  );
};
