import { useState } from "react";
import { Text, View } from "../../Atom";
import { TextArea } from "../../Atom/TextArea";

export const Note = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
        width="100%"
        direction="row"
      >
        <Text color="#717171" fontSize="18px">
          Algum comentário?
        </Text>
        <Text color="#717171" fontSize="15px">
          {String(text).length}/140
        </Text>
      </View>
      <TextArea
        value={text}
        onChangeText={setText}
        maxLength={140}
        placeholderTextColor="#dcdcdc"
        placeholder="Ex: tirar a cebola, maionese á porte etc."
      />
    </View>
  );
};
