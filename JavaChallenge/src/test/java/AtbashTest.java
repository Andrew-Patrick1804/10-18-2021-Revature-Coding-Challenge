import static org.junit.jupiter.api.Assertions.*;

class AtbashTest {

    Atbash atbash;

    @org.junit.jupiter.api.BeforeEach
    void setUp() {
        atbash = new Atbash();
    }

    @org.junit.jupiter.api.AfterEach
    void tearDown() {
    }

    @org.junit.jupiter.api.Test
    void atbash() {

        //ASSIGN
        String expected1 = "zkkov";
        String expected2 = "Svool dliow!";
        String expected3 = "Xsirhgnzh rh gsv 25gs lu Wvxvnyvi";

        //ACT
        String actual1 = atbash.atbash("apple");
        String actual2 = atbash.atbash("Hello world!");
        String actual3 = atbash.atbash("Christmas is the 25th of December");

        //ASSERT
        assertEquals(expected1, actual1);
        assertEquals(expected2, actual2);
        assertEquals(expected3, actual3);
    }
}