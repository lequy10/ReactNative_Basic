import React, { useState } from "react";
import { Camera } from "react-native-camera";

const _Camera = ({ onTakePicture }) => {
  const [cameraRef, setCameraRef] = useState();

  // Khởi tạo camera
  const startCamera = async () => {
    const camera = new Camera({
      style: {
        width: 200,
        height: 200,
      },
    });
    setCameraRef(camera);
  };

  // Chụp ảnh
  const takePicture = async () => {
    const photo = await cameraRef.takePicture();
    onTakePicture(photo);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {cameraRef && (
        <CameraRef
          ref={cameraRef}
          onTakePicture={takePicture}
          aspect={Camera.constants.Aspect.fill}
        />
      )}
    </View>
  );
};

export default _Camera;
