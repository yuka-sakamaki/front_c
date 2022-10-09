import {
  SContainer,
  SItemWrapper,
  SText,
  SBorder,
  SButton,
} from "./sharedStyles";

export const LeftComponent = (props) => {
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
      <SButton onClick={onClick}>右へ移動</SButton>
    </SContainer>
  );
};
