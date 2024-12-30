function triggerFileInput(type) {
    document.getElementById(`${type}Upload`).click();
  }
  
  function handleFileUpload(type) {
    const fileInput = document.getElementById(`${type}Upload`);
    const tickIcon = document.getElementById(`${type}Check`);
    const eyeIcon = document.getElementById(`${type}EyeIcon`);
    const uploadIcon = document.getElementById(`${type}UploadIcon`);
  
    if (fileInput.files.length > 0) {
      tickIcon.classList.remove("hidden");
      eyeIcon.classList.remove("hidden");
      uploadIcon.classList.add("hidden");
    }
  }
  
  function openModal(type) {
    const modalImage = document.getElementById("modalImage");
    const fileInput = document.getElementById(`${type}Upload`);
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        modalImage.src = e.target.result;
        document.getElementById("my_modal_6").checked = true;
      };
      reader.readAsDataURL(file);
    }
  }
  
  function removeImage() {
    const modal = document.getElementById("my_modal_6");
    modal.checked = false;
  
    // Reset Aadhaar
    const aadhaarInput = document.getElementById("aadhaarUpload");
    aadhaarInput.value = "";
    document.getElementById("aadhaarCheck").classList.add("hidden");
    document.getElementById("aadhaarEyeIcon").classList.add("hidden");
    document.getElementById("aadhaarUploadIcon").classList.remove("hidden");
  
    // Reset PAN
    const panInput = document.getElementById("panUpload");
    panInput.value = "";
    document.getElementById("panCheck").classList.add("hidden");
    document.getElementById("panEyeIcon").classList.add("hidden");
    document.getElementById("panUploadIcon").classList.remove("hidden");
  }
  