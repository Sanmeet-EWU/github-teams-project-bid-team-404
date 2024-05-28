document.addEventListener('DOMContentLoaded', async () => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            const idToken = await user.getIdToken();
            const response = await fetch(`/api/getCurrentUser`, {
                headers: {
                    Authorization: `Bearer ${idToken}`
                }
            });
            const userData = await response.json();
            const userId = userData.userId;

            const userProfile = await fetchUserProfile(userId);
            document.getElementById('userame').value = userProfile.username;
            document.getElementById('email').value = userProfile.email;
            document.getElementById('profilePic').value = userProfile.profilePic;
            document.getElementById('bio').value = userProfile.bio;
        } else {
            console.log('No user signed in');
        }
    });
});