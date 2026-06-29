document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start');
    const screenWelcome = document.getElementById('screen-welcome');
    const screenMaterials = document.getElementById('screen-materials');

    // Handle Start Button Click
    btnStart.addEventListener('click', () => {
        // Play subtle sound or animation if needed
        
        // Hide welcome screen
        screenWelcome.classList.remove('active');
        
        // Wait a tiny bit for transition, then show materials screen
        setTimeout(() => {
            screenMaterials.classList.add('active');
        }, 300);
    });
});

// Handle Material Selection
function selectMaterial(materialName) {
    console.log(`Materi dipilih: ${materialName}`);
    // In a real app, this would transition to the AI Chat screen
    // For now, we can just alert or prepare the next screen
    alert(`Anda memilih materi: ${materialName}\n\n(Akan dilanjutkan ke layar Chat AI)`);
}
