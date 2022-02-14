package com.peaqock.utils;

import org.geotools.referencing.GeodeticCalculator;
import org.geotools.referencing.crs.DefaultGeographicCRS;
import org.locationtech.jts.geom.Coordinate;
import org.locationtech.jts.geom.Geometry;
import org.locationtech.jts.geom.GeometryFactory;
import org.locationtech.jts.geom.Point;
import si.uom.SI;
import systems.uom.common.USCustomary;
import tec.uom.se.quantity.Quantities;

import javax.measure.Quantity;
import javax.measure.quantity.Length;

public class GeometryUtils {

    private static final double RADIUS = 30000;

    public static Point createPoint(double longitude, double latitude) {
        return new GeometryFactory().createPoint(new Coordinate(longitude, latitude));
    }

    public static boolean checkPointIsNear(Point centerPoint, Point checkPoint) {
        final var dist = Quantities.getQuantity(RADIUS, USCustomary.METER);
        final var geometry = createCircle(dist, centerPoint);
        return geometry.contains(checkPoint);
    }

    public static Geometry createCircle(Quantity<Length> distance, Point point) {
        final var calculator = new GeodeticCalculator(DefaultGeographicCRS.WGS84);
        calculator.setStartingGeographicPoint(point.getX(), point.getY());

        final var converter = distance.getUnit().getConverterTo(SI.METRE);
        double d = converter.convert(distance.getValue()).doubleValue();
        calculator.setDirection(0.0, d);
        final var p2 = calculator.getDestinationGeographicPoint();
        calculator.setDirection(90.0, d);
        final var p3 = calculator.getDestinationGeographicPoint();

        double dy = p2.getY() - point.getY();
        double dx = p3.getX() - point.getX();
        double dist = (dy + dx) / 2.0;

        return point.buffer(dist);
    }
}
