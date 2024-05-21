package javaclassestests;

import javaclasses.*;

import org.junit.*;


public class RecipeTests {

    //I was just testing if I had junit setup right --------------------------------------

    @Test
    public void temp_test() {
        Assert.assertEquals(2, 1+1);
    }

    @Test
    public void temp_Date() {

        Recipe rep = new Recipe(null, null, null, null, null);
        Assert.assertEquals(rep.getDate(),rep.getDate());

    }

}
