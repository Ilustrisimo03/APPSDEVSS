const loadFonts = async () => {
    try {
        await Font.loadAsync({
            'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
            'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        });
        setFontsLoaded(true);
    } catch (error) {
        console.error('Error loading fonts:', error);
    }
};
